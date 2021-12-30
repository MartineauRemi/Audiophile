import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

describe('testing App component', () => {
    render(<App />)
})