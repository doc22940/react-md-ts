import * as React from 'react';
import { render } from 'react-dom';

import Button from 'react-md/lib/Buttons';
import Dialog from 'react-md/lib/Dialogs';

//------------------------------------------------------------------------------
interface IAnotherCompProps {
    someVar: string;
}

const AnotherComp: React.SFC<IAnotherCompProps> = (props: IAnotherCompProps) => {
    return (
        <div>{props.someVar}</div>
    );
}

//------------------------------------------------------------------------------
interface ISomeCompState {
    visible: boolean;
}

class SomeComp extends React.Component<void, ISomeCompState> {
    constructor() {
        super();
        this.state = { visible: false };
    }

    clicked = (e: React.MouseEvent<HTMLButtonElement>): void => {
        this.openDialog();
    }

    openDialog = () => {
        this.setState({ visible: true });
    };

    closeDialog = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
                <Button raised label='Click me' onClick={this.clicked} />

                <Dialog
                    id="dialogRocks"
                    visible={this.state.visible}
                    title="react-md rocks"
                    onHide={this.closeDialog}
                    focusOnMount={false}
                >
                    <AnotherComp someVar='Hello you!' />
                </Dialog>
            </div>
        )
    }
}

render(
    <SomeComp />,
    document.getElementById('root')
);