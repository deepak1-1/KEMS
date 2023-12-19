import { gql } from "graphql-request";

export const GET_USER = gql`
    query USER_DETAILS($where: user_user_bool_exp!) {
        users: user_user(where: $where) {
            contact_number
            email
            id
            is_active
            name
            organisation_id
            password
            username
            user_roles {
                role {
                    name
                    permissions {
                        permission
                    }
                }
            }
        }
    }
`;

export const GET_LOGIN_TOKENS = gql`
    query USER_LOGIN_TOKEN($where: user_login_token_bool_exp!) {
        user_login_token(where: $where) {
            family_id
            is_active
            user {
                id
                name
                user_roles {
                    role {
                        name
                        permissions {
                            permission
                        }
                    }
                }
            }
        }
    }
`;

export const INSERT_LOGIN_TOKEN = gql`
    mutation INSERT_LOGIN_TOKEN(
        $objects: [user_login_token_insert_input!] = {}
    ) {
        insert_user_login_token(objects: $objects) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

export const UPDATE_LOGIN_TOKEN = gql`
    mutation UPDATE_LOGIN_TOKEN(
        $where: user_login_token_bool_exp!
        $_set: user_login_token_set_input!
    ) {
        update_user_login_token(where: $where, _set: $_set) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

export const INSERT_UPDATE_LOGIN_TOKEN = gql`
    mutation INSERT_UPDATE_LOGIN_TOKEN(
        $objects: [user_login_token_insert_input!] = {}
        $where: user_login_token_bool_exp = {}
        $_set: user_login_token_set_input = {}
    ) {
        insert_user_login_token(objects: $objects) {
            affected_rows
            returning {
                id
            }
        }
        update_user_login_token(where: $where, _set: $_set) {
            affected_rows
            returning {
                id
            }
        }
    }
`;
