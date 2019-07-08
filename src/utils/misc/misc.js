export const createNamespacedConstFactory = (namespace: string) => (name: string): string => `${namespace}/${name}`;

export const msToHours = (ms: number) => {
    return ms/1000/60/60;
}