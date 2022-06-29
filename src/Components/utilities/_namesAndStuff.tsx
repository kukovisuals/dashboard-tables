export type HeaderProps = {
    header: string;
    imageSource: string;
    altMessage: string;
};

export interface TableProps {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
}

export interface DisplayProps {
    title: string;
    icon: string;
    amount: number;
    id: number;
}