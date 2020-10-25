export type EntityFields<T extends Object> = keyof T;

export function trimEntity<T>(entity: T, fields: EntityFields<typeof entity>[]) {
    fields.forEach(field => delete entity[field]);
    return entity;
}
