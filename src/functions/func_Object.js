export const finalId = (id, length) => {
    let id_ = id.length > 0 ? id.slice(length) : 0;
    return id_;
};
