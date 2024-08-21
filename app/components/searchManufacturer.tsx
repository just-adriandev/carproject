"use client"

import * as React from "react"
import { Car, Check, ChevronsUpDown, Factory } from "lucide-react"

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

interface iAppProps {
    manufacturer:string;
    setManufacturer:(manufacturer: string) => void;
}

const frameworks = {manufacturers}

const frameworks2 = [
    {
      value: "adfds",
      label: "Next.js",
    },
    {
      value: "sadfsdf",
      label: "SvelteKit",
    },
    {
      value: "adfsdf.js",
      label: "Nuxt.js",
    },
    {
      value: "remixsas",
      label: "Remix",
    },
    {
      value: "astroasas",
      label: "Astro",
    },
  ]

export function SearchManufacturer({manufacturer, setManufacturer}: iAppProps) {
  const [openf1, setOpenf1] = React.useState(false)
  const [valuef1, setValuef1] = React.useState("")
  const [openf2, setOpenf2] = React.useState(false)
  const [valuef2, setValuef2] = React.useState("")

  return (
    
    <div className="md:flex">
        <div className="mb-3 md:mr-3">
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
                      setValuef1(currentValue === valuef1 ? "" : currentValue)
                      setOpenf1(false)
                      }}
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
        
        <div className="">
        <Popover open={openf2} onOpenChange={setOpenf2}>

          <PopoverTrigger asChild>
              <Button
              variant="secondary"
              role="combobox"
              aria-expanded={openf2}
              className=" w-[300px] md:w-[350px] justify-between"
              >
              {valuef2
                  ? frameworks2.find((framework2) => framework2.value === valuef2)?.label
                  : <span className="flex items-center text-center"> <Car className=" mr-2 text-muted-foreground"/> Selecione o modelo.</span>}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
              <Command>
              <CommandInput placeholder="Procurar modelo" />
              <CommandList>
                  <CommandEmpty>Sem resultados</CommandEmpty>
                  <CommandGroup>
                  {frameworks2.map((framework2) => (
                      <CommandItem
                      key={framework2.value}
                      value={framework2.value}
                      onSelect={(currentValue) => {
                          setValuef2(currentValue === valuef2 ? "" : currentValue)
                          setOpenf2(false)
                      }}
                      >
                      <Check
                          className={cn(
                          "mr-2 h-4 w-4",
                          valuef2 === framework2.value ? "opacity-100" : "opacity-0"
                          )}
                      />
                      {framework2.label}
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
