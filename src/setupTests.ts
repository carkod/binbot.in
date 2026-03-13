// src/setupTests.ts
import '@testing-library/jest-dom';

// --- Mock IntersectionObserver ---
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = global.IntersectionObserver || IntersectionObserverMock;

// --- Mock ResizeObserver ---
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = global.ResizeObserver || ResizeObserverMock;