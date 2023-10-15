'use client';

import { ColumnDef } from '@tanstack/react-table';

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  products: string;
  totalPrice: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'products',
    header: 'Products',
    cell: ({ row }) => {
      const products = row.original.products.split(';');
      return (
        <div className="flex flex-col gap-y-2">
          {products.map((product, i) => (
            <p key={i}>{product}</p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price',
  },
  {
    accessorKey: 'isPaid',
    header: 'Paid',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
];
