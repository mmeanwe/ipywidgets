const ManagerBase = require('../lib/index.js').ManagerBase;

export class DummyManager extends ManagerBase {
    constructor() {
        super();
        this.el = window.document.createElement('div');
    }
    
    display_view(msg, view, options) {
        return Promise.resolve(view).then(view => {
            this.el.appendChild(view.el);
            view.on('remove', () => console.log('view removed', view));
            return view;
        });
    }
    
    _get_comm_info() {
        return Promise.resolve({});
    }

    _create_comm() {
        return Promise.resolve({
            on_close: () => {},
            on_msg: () => {},
            close: () => {}
        });
    }
}
