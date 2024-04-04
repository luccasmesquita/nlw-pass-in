import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'

export function AttendeeList() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold"> Participantes </h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3" >
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0" placeholder="Buscar Participante..." />
                </div>
            </div>

            <Table>
                <thead>
                <tr className='border-b border-white/10'>
                    <TableHeader style={{ width: 48}} >
                        <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' name="" id="" />
                    </TableHeader>
                    <TableHeader>Código</TableHeader>
                    <TableHeader>Participante</TableHeader>
                    <TableHeader>Data de inscrição</TableHeader>
                    <TableHeader>Data do check-in</TableHeader>
                    <TableHeader style={{ width: 64}}></TableHeader>
                </tr>
                </thead>
                <tbody>
                    {Array.from({length: 8}).map((_, i)=> {
                        return(
                            <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                                <TableCell>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' name="" id="" />
                                </TableCell>
                                <TableCell>23435435</TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>Luccas Mesquita</span>
                                        <span>hello@luccasmesquita.com</span>
                                    </div>
                                </TableCell>
                                <TableCell>7 days ago</TableCell>
                                <TableCell>3 days ago</TableCell>
                                <TableCell>
                                    <IconButton transparent >
                                        <MoreHorizontal className='size-4' />
                                    </IconButton>
                                </TableCell>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            showing 10 of 228 items
                        </TableCell>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>page 1 of 23</span>
                                <div className='flex gap-1.5'>
                                    <IconButton>
                                        <ChevronsLeft className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className='size-4' />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}