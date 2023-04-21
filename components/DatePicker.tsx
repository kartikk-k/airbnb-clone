import React, { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { motion } from 'framer-motion'
import { UsersIcon } from '@heroicons/react/24/solid';

interface Props {
    cancel: any
}

function DatePicker({ cancel }: Props) {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guests, setGuests] = useState<number>(1)

    useEffect(() => {
        if (guests > 100) return setGuests(100)
    }, [guests])


    const selectionRange = [
        {
            startDate: startDate,
            endDate: endDate,
            key: 'selection'
        }
    ]



    const handleDateRangeChange = (ranges: any) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
        // console.log(ranges)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='relative flex justify-center overflow-auto scrollbar-light'>
            <div className='flex justify-center w-full'>
                <div className='calendar xs:px-4 h-fit'>
                    <DateRangePicker
                        className='overflow-hidden border rounded-md md:mx-0 h-[350px]'
                        ranges={selectionRange}
                        onChange={handleDateRangeChange}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                    />

                    <div className='flex items-center justify-between py-2 text-sm'>
                        <p className='font-semibold text-gray-500'>Number of guests: </p>

                        <div className='flex items-center gap-2'>
                            <UsersIcon className='w-5 h-5 fill-gray-400' />
                            <input value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} type="number" max={100} min={0} className='w-12 text-center border-b rounded-none outline-none text-primary' />
                        </div>
                    </div>

                    <div className='flex justify-around gap-6 py-4'>
                        <button onClick={() => cancel(true)} className='w-full px-4 py-1 bg-gray-200 rounded-md'>Cancel</button>
                        <button className='w-full px-4 py-1 text-white rounded-md bg-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default DatePicker