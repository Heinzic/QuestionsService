import { Button } from '../button/Button'
import { Flex } from '../flex/Flex'
import { getPaginationRange } from './lib/usePagination'
import styles from './Pagination.module.css'

interface PaginationProps {
    currentPage: number
    totalPages: number
    paginationLimit: number
    handleNextPage: () => void
    handlePreviousPage: () => void
    handlePageClick: (page: number) => void
    className?: string
}

export const Pagination = ({
    currentPage,
    totalPages,
    paginationLimit,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
    className,
}: PaginationProps) => {
    const paginationItems = getPaginationRange({
        totalPages,
        currentPage,
        paginationLimit,
    })

    return (
        <div>
            <Flex gap="md" direction="row" className={className}>
                <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    {'←'}
                </Button>

                <ul className={styles.list}>
                    {paginationItems.map((item, i) => {
                        if (item === '...') {
                            return (
                                <li key={i} className={styles.dots}>
                                    ...
                                </li>
                            )
                        }

                        // Номер страницы
                        const isActive = item === currentPage

                        return (
                            <li key={i}>
                                <button
                                    className={
                                        isActive
                                            ? styles.active
                                            : styles.pageButton
                                    }
                                    onClick={() => handlePageClick(item)}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item}
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <Button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    {'→'}
                </Button>
            </Flex>
        </div>
    )
}
