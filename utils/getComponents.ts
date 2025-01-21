import { table1 } from "@/latex/components/table1"
import { table2 } from "@/latex/components/table2"
import { code1 } from "@/latex/components/code1"

export interface Component {
  name: string
  description: string
  category: string
  packages?: string[]
  setupCode?: string
  code: string
  img: string
}

export function getComponents(): Component[] {
  return [table1, table2, code1]
}
