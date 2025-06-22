import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  test('renders hero content', () => {
    render(<Hero />)
    expect(screen.getByText('A Software Engineer')).toBeInTheDocument()
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
    expect(screen.getByText('Akhmad Wildan')).toBeInTheDocument()
  })

  test('renders download CV button', () => {
    render(<Hero />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  test('shows downloading state when CV button clicked', async () => {
    render(<Hero />)
    const downloadButton = screen.getByText('Download CV')
    
    fireEvent.click(downloadButton)
    expect(screen.getByText('Downloading...')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(screen.getByText('Download CV')).toBeInTheDocument()
    }, { timeout: 1000 })
  })

  test('renders hero image', () => {
    render(<Hero />)
    const image = screen.getByAltText('Akhmad Wildan portrait')
    expect(image).toBeInTheDocument()
  })
})