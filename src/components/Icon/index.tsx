/* eslint-disable react/jsx-props-no-spreading */

import React, {forwardRef, ReactNode} from 'react';
import clsx from 'clsx';
import noop from 'lodash/noop';

import FileDocumentIcon from 'mdi-react/FileDocumentIcon';
import AccountBalanceIcon from 'mdi-react/AccountBalanceIcon';
import VerifiedUserIcon from 'mdi-react/VerifiedUserIcon';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import DnsIcon from 'mdi-react/DnsIcon';
import KeyboardArrowRightIcon from 'mdi-react/KeyboardArrowRightIcon';
import MenuIcon from 'mdi-react/MenuIcon';

import {getCustomClassNames} from 'utils/components';
import TnbIcon from './TnbIcon';
import './Icon.scss';

// These names are camelCased versions of the names found in https://materialdesignicons.com/
export enum IconType {
  tnb,
  document,
  accountBalance,
  verifiedUser,
  checkCircle,
  dns,
  keyboardArrowRight,
  menu,
}

interface ComponentProps {
  className?: string;
  disabled?: boolean;
  icon: IconType;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
  size?: number | string;
}

const Icon = forwardRef<HTMLDivElement, ComponentProps>(({className, disabled = false, icon, onClick, size}, ref) => {
  const iconProps = {
    onClick: disabled ? noop : onClick,
    size,
  };

  const renderIcon = (): ReactNode => {
    switch (icon) {
      case IconType.tnb:
        return <TnbIcon {...iconProps} />;
      case IconType.document:
        return <FileDocumentIcon {...iconProps} />;
      case IconType.accountBalance:
        return <AccountBalanceIcon {...iconProps} />;
      case IconType.verifiedUser:
        return <VerifiedUserIcon {...iconProps} />;
      case IconType.checkCircle:
        return <CheckCircleIcon {...iconProps} />;
      case IconType.dns:
        return <DnsIcon {...iconProps} />;
      case IconType.keyboardArrowRight:
        return <KeyboardArrowRightIcon {...iconProps} />;
      case IconType.menu:
        return <MenuIcon {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx('Icon', className, {
        'Icon--disabled': disabled,
        ...getCustomClassNames(className, '--disabled', disabled),
      })}
      ref={ref}
    >
      {renderIcon()}
    </div>
  );
});

export default Icon;
