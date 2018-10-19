declare global {

}
/**
 *
 *
 * @export
 * @class Component
 */
export class Component {

}

declare namespace BoxExpress {

}

declare namespace BoxExpress.ui {
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

    /**
     *
     *
     * @export
     * @class boxForm
     * @extends {Component}
     */
    export class boxForm extends Component {
        option(config?: boxFormOptions);
    }
}

export default BoxExpress;