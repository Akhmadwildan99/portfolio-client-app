import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'
import ArticleDetail from '../ArticleDetail'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useParams: () => ({ slug: 'state-management-react-vite-pokemon-app' }),
  }
})

const ArticleDetailWithRouter = () => (
  <BrowserRouter>
    <ArticleDetail />
  </BrowserRouter>
)

describe('ArticleDetail', () => {
  test('renders article title', () => {
    render(<ArticleDetailWithRouter />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('State Management di React Vite Berdasarkan Proyek Pokemon-App')
  })

  test('renders back to home link', () => {
    render(<ArticleDetailWithRouter />)
    expect(screen.getAllByText('Back to Home')[0]).toBeInTheDocument()
  })

  test('renders article content', () => {
    render(<ArticleDetailWithRouter />)
    expect(screen.getByText(/React telah menjadi/)).toBeInTheDocument()
  })
})