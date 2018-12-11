import classnames from 'classnames';
import './style.scss';

const {
	getColorClassName
} = wp.editor;

function Section({
	paddingTop,
	paddingBottom,
	marginTop,
	marginBottom,
	mobilePaddingTop,
	mobilePaddingBottom,
	mobileMarginTop,
	mobileMarginBottom,
	backgroundColor,
	overlayEnabled,
	overlayColor,
	overlayOpacity,
	overlayAttachmentId,
	overlayAttachmentUrl,
	attachmentPositionX,
	attachmentPositionY,
	attachmentSize,
	className,
	children,
	...props
}) {
	const wrapperClasses = classnames(
		'bt-section',
		`bt-pt-${paddingTop}`,
		`bt-pb-${paddingBottom}`,
		`bt-mt-${marginTop}`,
		`bt-mb-${marginBottom}`,
		`bt-xs-pt-${mobilePaddingTop}`,
		`bt-xs-pb-${mobilePaddingBottom}`,
		`bt-xs-mt-${mobileMarginTop}`,
		`bt-xs-mb-${mobileMarginBottom}`,
		`bt-background-${backgroundColor}`,
		{
			[`bt-background-positiony-${attachmentPositionX}`]: attachmentPositionX !== 'undefined',
			[`bt-background-positionx-${attachmentPositionY}`]: attachmentPositionY !== 'undefined',
			[`bt-background-size-${attachmentSize}`]: attachmentSize !== 'undefined',
		},
		className
	);
	const innerClasses = classnames(
		'wrap',
		'bt-section-inner',
	);

	const overlayClasses = classnames(
		'bt-section-overlay',
		`bt-section-overlay-${getColorClassName('overlay', overlayColor)}`,
		`bt-background-${backgroundColor}`,
		overlayAttachmentId && `has-background-image-${overlayAttachmentId}`,
	);

	const overlayStyles = {
		backgroundImage: `url('${overlayAttachmentUrl}')`,
		backgroundColor: `${overlayColor}`,
		opacity: `${overlayOpacity / 100}`
	}

	return (
		<div className={wrapperClasses} {...props} >
			<div className={innerClasses}>
				{children}
			</div>
			{overlayEnabled && (overlayColor || overlayAttachmentUrl) &&
				<div
					className={overlayClasses}
					style={overlayStyles}>
				</div>
			}
		</div>
	);
}

export default Section;