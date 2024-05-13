import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Customers',
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'All Customers',
            href: `/dashboard/customers`,
            active: true,
          },
        ]}
      />
      <p>Work in progress</p>
    </main>
  );
}
