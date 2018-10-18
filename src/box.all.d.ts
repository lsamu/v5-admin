declare global {

}
export class Component {

}

declare module BoxExpress {

}

declare module BoxExpress.ui {
    export interface boxDataGridOptions {
        /**
         * 标题
         */
        title?: string;
    }
    export class boxDataGrid extends Component {
        option(config?: boxDataGridOptions);
    }

    export interface boxFormOptions {

    }

    export interface boxFormOptions {
        /**
         * 标题
         */
        title?: string;
    }

    export class boxForm extends Component {
        option(config?: boxFormOptions);
    }
}

export default BoxExpress;