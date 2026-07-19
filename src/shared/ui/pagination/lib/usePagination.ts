type PaginationItem = number | '...'

interface PaginationRangeParams {
    totalPages: number
    currentPage: number
    paginationLimit: number
}

export const getPaginationRange = ({
    totalPages,
    currentPage,
    paginationLimit = 4,
}: PaginationRangeParams): PaginationItem[] => {
    if (totalPages <= 0) return []
    if (totalPages === 1) return [1]

    // Если страниц мало — показываем все
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const paginationResult: PaginationItem[] = []

    // Всегда добавляем первую страницу
    paginationResult.push(1)

    if (currentPage <= paginationLimit) {
        for (let i = 2; i <= paginationLimit + 3; i++) {
            paginationResult.push(i)
        }

        if (totalPages > paginationLimit + 1) {
            paginationResult.push('...')
        }
    }
    // Если текущая страница близко к концу
    else if (currentPage >= totalPages - paginationLimit) {
        paginationResult.push('...')

        for (let i = totalPages - paginationLimit; i <= totalPages; i++) {
            paginationResult.push(i)
        }
    }
    // Текущая страница в середине
    else {
        // Добавляем многоточие после первой
        paginationResult.push('...')

        for (
            let i = currentPage - paginationLimit;
            i < currentPage + paginationLimit + 1;
            i++
        ) {
            if (i !== 1) paginationResult.push(i)
        }

        // Добавляем многоточие перед последней
        paginationResult.push('...')
    }

    // Всегда добавляем последнюю страницу (если она не первая)
    if (
        totalPages > 1 &&
        paginationResult[paginationResult.length - 1] !== totalPages
    ) {
        paginationResult.push(totalPages)
    }

    return paginationResult
}
