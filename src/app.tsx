import * as React from 'react';
import { Button, Toggle } from 'office-ui-fabric-react';
import { css } from 'office-ui-fabric-react/lib/Utilities';

export default () => {
    return (
        <div>
            <Button>按钮</Button>
            <i className={css('ms-Icon ms-Icon--Mail')} aria-hidden="true"></i>
            <div className={css('ms-u-hiddenMdDown')}>
                <Toggle
                    defaultChecked={false}
                    checked
                    label='Enabled and checked'
                    onText='On'
                    offText='Off' />
            </div>
        </div>
    );
}