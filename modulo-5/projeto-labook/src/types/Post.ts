export class Post {
    constructor(
        private id: string,
        private content: string,
        private user_id: string
    ) { }

    static toPostModel(data: any) {
        return new Post(data.id, data.content, data.user_id)
    }

    getId() {
        return this.id
    }
    getContent() {
        return this.content
    }
    getUserId() {
        return this.user_id
    }
}

export class Like {
    constructor(
        private id: string,
        private post_id: string,
        private user_id: string
    ) { }

    getId() {
        return this.id
    }

    getPostId() {
        return this.post_id
    }

    getUserId() {
        return this.user_id
    }
}