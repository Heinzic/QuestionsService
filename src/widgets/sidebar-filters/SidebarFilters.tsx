import { useState } from "react";
import { SpecializationList } from "../specialization-list";

interface IFilterConfig {
    specializationId?: number[];
    skills?: number[];
    complexity?: number[];
    rate?: string[];
    status?: string;
}
export function SidebarFilters() {
    const [filterConfig, setFilterConfig] = useState<IFilterConfig>({ specializationId: [] })

    const handleSpecializationSelect = (id: number): void => {
        setFilterConfig((prev) =>
            prev.specializationId?.includes(id)
                ? { ...prev, specializationId: prev.specializationId.filter((v) => v !== id) }
                : { ...prev, specializationId: [...prev.specializationId, id] }
        );
    };
    return (
        <>
            <SpecializationList 
                selectedIds={filterConfig.specializationId}
                onClick={handleSpecializationSelect}
            />
        </>
    );
}
