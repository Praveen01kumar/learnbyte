

export interface SubItem {
    sub_title: string;
    href: string;
}

export interface SubList {
    list_title: string;
    href: string;
    sub_list: SubItem[];
}

export interface Content {
    heading: string;
    description: string;
    route: string;
    list: SubList[];
}

export interface CouseCard {
    name: string;
    url: string;
    icon: string;
    item_bg: string;
}

export interface Other {
    name: string;
    img: string;
    des: string;
}

export interface PostCard {
    id: string;
    name: string;
    img: string;
    view_count: number;
    like_count: number;
    other: Other;
    catcol: string;
    post_cat: string;
    created: string;
    description: string;
}

export interface HLayOut {
    head: string;
    des: string;
    search: boolean;
    post?: PostCard[];
    course?: CouseCard[];
    type: string;
}

export interface RsideBar {
    id: string;
    name: string;
}