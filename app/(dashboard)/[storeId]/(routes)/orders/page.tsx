import format from 'date-fns/format';

import prismadb from '@/lib/prismadb';

import { OrderClient } from './components/client';
import { OrderColumn } from './components/columns';
import { formatter } from '@/lib/utils';

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: {
            include: {
              size: true,
              color: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    email: order.email,
    products: order.orderItems
      .map(
        (orderItem) =>
          `${orderItem.product.name}, ${orderItem.product.size.value}, ${orderItem.product.color.name}, ${orderItem.quantity} pcs`,
      )
      .join(';'),
    totalPrice: formatter.format(
      order.orderItems.reduce(
        (acc, orderItem) => acc + Number(orderItem.product.price),
        0,
      ),
    ),
    isPaid: order.isPaid,
    createdAt: format(order.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
