export const formatClientDate = (date?: Date | null): string => {
    if (!date) {
        return ''
    }

    return new Date(date).toLocaleDateString()
}