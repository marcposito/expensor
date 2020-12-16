export default interface Repository {
    create(query: any): Promise<any>;
    get(query: any): Promise<any>;
    update(query: any): Promise<any>;
    delete(query: any): Promise<any>;
};