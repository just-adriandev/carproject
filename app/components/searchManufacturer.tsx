"use client"

import * as React from "react"
import { Car, Check, ChevronsUpDown, Factory } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { manufacturers } from "@/constants/constants"
import { SearchBtn } from "./button"

interface iAppProps {
    manufacturer:string;
    setManufacturer:(manufacturer: string) => void;
}

const frameworks = {manufacturers}

export function SearchManufacturer({manufacturer, setManufacturer}: iAppProps) {
  const [openf1, setOpenf1] = React.useState(false)
  const [valuef1, setValuef1] = React.useState("")

  const handleSelect = (value: string) => {
    setValuef1(value)
    setManufacturer(value)
    setOpenf1(false)
  }

  return (
    
    <div className="md:flex">
        <div className="mb-3 flex md:mr-3">
        <Popover open={openf1} onOpenChange={setOpenf1}>

          <PopoverTrigger asChild>
          <Button
              variant="secondary"
              role="combobox"
              aria-expanded={openf1}
              className=" w-[300px] md:w-[350px] justify-between"
          >
              {valuef1
              ? manufacturers.find((manufacturers) => manufacturers.value === valuef1)?.label
              : <span className="flex items-center text-center"> <Factory className=" mr-2 text-muted-foreground"/> Selecione a montadora.</span> }
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />

          </Button> 

          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
          <Command>
              <CommandInput placeholder="Procurar montadora" />
              <CommandList>
              <CommandEmpty>Sem resultados.</CommandEmpty>
              <CommandGroup>
                  {manufacturers.map((manufacturers) => (
                  <CommandItem
                      key={manufacturers.value}
                      value={manufacturers.value}
                      onSelect={(currentValue) => {
                        handleSelect(currentValue)}
                      }
                  >
                      <Check
                      className={cn(
                          "mr-2 h-4 w-4",
                          valuef1 === manufacturers.value ? "opacity-100" : "opacity-0"
                      )}
                      />
                      {manufacturers.label}
                  </CommandItem>
                  ))}
              </CommandGroup>
              </CommandList>
          </Command>
          </PopoverContent>

        </Popover>
        </div>

    </div>
    
  )
}
