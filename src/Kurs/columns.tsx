"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  Kursnummer: number
  KursThema: string
  Inhalt: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Kursnummer",
    header: "Kursnummer",
  },
  {
    accessorKey: "KursThema",
    header: "KursThema",
  },
  {
    accessorKey: "Inhalt",
    header: "Inhalt",
  },
]
