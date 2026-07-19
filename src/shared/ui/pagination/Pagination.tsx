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
        <nav aria-label="Пагинация">
            <Flex gap="md" direction="row" className={className}>
                <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={styles.navButton}
                >
                    ←
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

                        const isActive = item === currentPage

                        return (
                            <li key={i}>
                                <button
                                    className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
                                    onClick={() => handlePageClick(item)}
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
                    className={styles.navButton}
                >
                    →
                </Button>
            </Flex>
        </nav>
    )
}
