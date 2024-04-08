import { Section, Item } from '../interfaces/dropdown.interface'
import { extractElements } from './extractElements'

export const getSelectedLabels = ({ 
    sections, 
    selectedKeys
}: {
    sections: Section[], 
    selectedKeys: Set<string>
}): string => {
    const selectList: string[] = []
    extractElements(sections).map((item: Item) => {
        if (Array.from(selectedKeys).includes(String(item?.id))) {
            selectList.push(item?.label)
        }
    })
    return selectList.join(", ")
}