import EmptyList from '@/components/home/EmptyList';
import CountryNames from '@/components/card/CountryNames';
import Link from 'next/link';

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

import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
import { fetchBookings, deleteBookingAction } from '@/utils/actions';

async function BookingsPage() {
  const bookings = await fetchBookings();
  if (bookings.length === 0) {
    return <EmptyList />;
  }
    return <div className="mt-16">
      <h4 className="mb-4 capitalize "> total Bookings: {bookings.length} </h4>
    <Table>
      <TableCaption>A list of your bookings</TableCaption>
      <TableHeader>
        <TableRow> 
        <TableHead>Property Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map( (booking) => {
          const {id, orderTotal, totalNights, checkIn, checkOut,  } = booking
          const {id:propertyId, name, country} = booking.property
          const  startDate = formatDate(checkIn)
          const finishDate = formatDate(checkOut)
            return <TableRow key={booking.id} >
                <TableCell> <Link href={`/property/${propertyId}`} className='underline text-muted-foreground tracking-wide'> {name} </Link> </TableCell>
                <TableCell  > <CountryNames countryCode={country} /> </TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{finishDate}</TableCell>
                <TableCell>
                  <DeleteBooking bookingId={id} />
                </TableCell>
            </TableRow>
        } )}


      </TableBody>
    </Table>

    </div>
  }


  function DeleteBooking({bookingId}:{bookingId:string} ) {
    const deleteBooking = deleteBookingAction.bind(0,{ bookingId})
  return  <FormContainer action={deleteBooking} >
    <IconButton actionType='delete' />
      </FormContainer>
  }

  export default BookingsPage;