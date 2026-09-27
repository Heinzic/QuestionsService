function toQueryString(params: Record<string, unknown>): string {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null || value === '') return;
        if (Array.isArray(value)) {
            if (value.length > 0) {
                value.forEach((v) => searchParams.append(key, String(v)));
            }
            return;
        }
        searchParams.set(key, String(value));
    });

    const result = searchParams.toString();
    return result;
}

function fromQueryString<T extends Record<string, unknown>>(
    search: string,
): Partial<T> {
    const params = new URLSearchParams(search);
    const result: Record<string, unknown> = {};

    params.forEach((value, key) => {
        const existing = result[key];
        if (existing === undefined) {
            result[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            result[key] = [existing, value];
        }
    });

    return result as Partial<T>;
}

export const searchParamsHandler = { toQueryString, fromQueryString } 