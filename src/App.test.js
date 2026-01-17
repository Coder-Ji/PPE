import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react  shuishguisghs usuusisui ssuiyusisy iysiu  ysui ysi uisy isysuiysiuyi suys uylink', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
