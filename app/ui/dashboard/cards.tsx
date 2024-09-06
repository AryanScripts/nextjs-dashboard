import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableType } from '@/app/lib/definitions';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  // Simulate fetching data (replace this with your actual data fetching logic)
  const totalPaidInvoices = await fetchTotalPaidInvoices();
  const totalPendingInvoices = await fetchTotalPendingInvoices();
  const numberOfInvoices = await fetchNumberOfInvoices();
  const numberOfCustomers = await fetchNumberOfCustomers();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

// Dummy functions for data fetching (replace these with actual implementations)
async function fetchTotalPaidInvoices() {
  return 1000; // Example value, replace with actual fetching logic
}

async function fetchTotalPendingInvoices() {
  return 500; // Example value, replace with actual fetching logic
}

async function fetchNumberOfInvoices() {
  return 150; // Example value, replace with actual fetching logic
}

async function fetchNumberOfCustomers() {
  return 75; // Example value, replace with actual fetching logic
}
