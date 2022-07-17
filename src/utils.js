export function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

export function handleSupabaseErrors(error) {
  switch (error.code) {
    case "23505":
      return "This email already exists"
      
    default:
      return error.message
  }
}