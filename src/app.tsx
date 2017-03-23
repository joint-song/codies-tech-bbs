import * as React from 'react';
import { Button, Toggle } from 'office-ui-fabric-react';

export default () => {
    return (
        <div>
            <Button>我是一个按钮</Button>
            <Toggle
                defaultChecked={true}
                label='Enabled and checked'
                onText='On'
                offText='Off' />
            <Toggle
                defaultChecked={false}
                label='Enabled and unchecked'
                onText='On'
                offText='Off' />
            <Toggle
                defaultChecked={true}
                disabled={true}
                label='Disabled and checked'
                onText='On'
                offText='Off' />
            <Toggle
                defaultChecked={false}
                disabled={true}
                label='Disabled and unchecked'
                onText='On'
                offText='Off' />
            <span>Hello, world!</span>
        </div>
    );
}