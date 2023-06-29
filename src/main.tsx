import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './routes/Expenses/index.tsx';
import Invoices from './routes/Invoices/index.tsx';
import NotFound from './routes/NotFound/index.tsx';
import Invoice from './routes/Invoices/Invoice/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        <Route path="*" element={<NotFound />} />{/* //=> Sub conteúdo de menu NotFound 404 */}

      </Route>
    </Routes>
  </BrowserRouter>,
)
