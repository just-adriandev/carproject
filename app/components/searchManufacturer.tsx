"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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

interface iAppProps {
    manufacturer:string;
    setManufacturer:(manufacturer: string) => void;
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

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
    
    <div>
        <Popover open={openf1} onOpenChange={setOpenf1}>

            <PopoverTrigger asChild>
            <Button
                variant="outline"
                role="combobox"
                aria-expanded={openf1}
                className="w-[400px] justify-between"
            >
                {valuef1
                ? frameworks.find((framework) => framework.value === valuef1)?.label
                : "Select framework..."}
            </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
            <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                    {frameworks.map((framework) => (
                    <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                        setValuef1(currentValue === valuef1 ? "" : currentValue)
                        setOpenf1(false)
                        }}
                    >
                        <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            valuef1 === framework.value ? "opacity-100" : "opacity-0"
                        )}
                        />
                        {framework.label}
                    </CommandItem>
                    ))}
                </CommandGroup>
                </CommandList>
            </Command>
            </PopoverContent>

        </Popover>

        <Popover open={openf2} onOpenChange={setOpenf2}>

                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openf2}
                    className="w-[400px] justify-between"
                    >
                    {valuef2
                        ? frameworks2.find((framework2) => framework2.value === valuef2)?.label
                        : "Select framework..."}
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-[200px] p-0">
                    <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                        {frameworks.map((framework2) => (
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
    
  )
}
