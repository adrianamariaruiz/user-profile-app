import { fireEvent, render, screen } from "@testing-library/react"
import ContactForm from "@/app/components/ContactForm"

describe("Contact Form", () => {
  test('should render form', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', {
      name: /Formulario/i
    })).toBeInTheDocument()
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Deja tu mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /enviar/i
    })).toBeInTheDocument();
  })

  test('submit button', () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Adriana Ruiz' } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'adriana@test.com' } })
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Mensaje' } })
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));
  })
})

