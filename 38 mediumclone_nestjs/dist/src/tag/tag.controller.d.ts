import { TagService } from '@app/tag/tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    findAll(): Promise<{
        tags: string[];
    }>;
}
