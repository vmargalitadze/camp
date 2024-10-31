import { fetchReservations } from '@/utils/actions';
import Link from 'next/link';
import EmptyList from '@/components/home/EmptyList';


import { formatDate, formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CountryNames from '@/components/card/CountryNames';
import Stats from '@/components/reservations/Stats';

async function ReservationPage() {
    const reservations = await fetchReservations();

    if (reservations.length === 0) {
      return <EmptyList />;
    }
  return (
    <>
    <Stats />
    
    <div className='mt-16'>
        <div className="mb-4 capitalize"> Reservations: {reservations.length} </div>
        <Table>
            <TableCaption>A list of recent Reservations</TableCaption>
            <TableHeader> 
                <TableRow>
                <TableHead>Property Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
                </TableRow>
                 </TableHeader>

                 <TableBody>
          {reservations.map((item) => {
            const { id, orderTotal, totalNights, checkIn, checkOut } = item;
            const { id: propertyId, name, country } = item.property;
            const startDate = formatDate(checkIn);
            const endDate = formatDate(checkOut);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/properties/${propertyId}`}
                    className='underline text-muted-foreground tracking-wide'
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>
                  <CountryNames countryCode={country} />
                </TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        </Table>
    </div>
    
    </>
  )
}

export default ReservationPage