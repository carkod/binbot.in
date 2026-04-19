import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Contact } from "../Contact";
import { trackCTA, trackFormSubmit } from "@/lib/analytics";

const toast = jest.fn();

jest.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast }),
}));

jest.mock("@/lib/analytics", () => ({
  trackCTA: jest.fn(),
  trackFormSubmit: jest.fn(),
}));

jest.mock("react-phone-number-input", () => ({
  __esModule: true,
  default: ({
    value,
    onChange,
    className,
  }: {
    value?: string;
    onChange: (value: string) => void;
    className?: string;
  }) => (
    <input
      data-testid="phone-input"
      className={className}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

describe("Contact", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  it("submits the early access form successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
    });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Jane Smith"), {
      target: { value: "Jane Smith" },
    });
    fireEvent.change(screen.getByPlaceholderText("jane@example.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByTestId("phone-input"), {
      target: { value: "+447700900123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Acme Corp"), {
      target: { value: "Acme" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "retail" },
    });
    fireEvent.change(screen.getByPlaceholderText(/anything you'd like/i), {
      target: { value: "Interested in launch access." },
    });
    fireEvent.click(screen.getByRole("checkbox"));
    const submitButton = screen.getByRole("button", {
      name: /request early access/i,
    });
    fireEvent.click(submitButton);
    fireEvent.submit(submitButton.closest("form") as HTMLFormElement);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    const [url, options] = (global.fetch as jest.Mock).mock.calls[0];
    expect(url).toBe("https://api.terminal.binbot.in/inquiries");
    expect(options.method).toBe("POST");

    const body = JSON.parse(options.body as string);
    expect(body).toMatchObject({
      phone: "+447700900123",
      newsletter: true,
      terms_agreement: true,
    });
    expect(body).toEqual(
      expect.objectContaining({
        full_name: expect.any(String),
        email: expect.any(String),
        organisation: expect.any(String),
        reason: expect.any(String),
        message: expect.any(String),
      }),
    );

    expect(trackCTA).toHaveBeenCalledWith("Request Early Access", "contact");
    expect(trackFormSubmit).toHaveBeenCalledWith("early_access");
    await waitFor(() =>
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Request Received",
        }),
      ),
    );
  });

  it("shows an error toast when the request fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Jane Smith"), {
      target: { value: "Jane Smith" },
    });
    fireEvent.change(screen.getByPlaceholderText("jane@example.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "institutional" },
    });
    const submitButton = screen.getByRole("button", {
      name: /request early access/i,
    });
    fireEvent.click(submitButton);
    fireEvent.submit(submitButton.closest("form") as HTMLFormElement);

    await waitFor(() =>
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Something went wrong",
          variant: "destructive",
        }),
      ),
    );
  });
});
