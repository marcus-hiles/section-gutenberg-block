import './style.scss';
import './editor.scss';

import classnames from 'classnames';

import Section from '../components/section/SectionDiv';
import EditBlock from './edit-block'

const {
	registerBlockType
} = wp.blocks;


const {
	withFallbackStyles
} = wp.components;

const {
	InnerBlocks,
	withColors,
} = wp.editor;

const { __, _x } = wp.i18n;

var compose = wp.compose.compose


const blockAttributes = {
	align: {
		type: 'string',
		default: 'full'
	},
	attachmentId: {
		type: 'Number',
	},
	attachmentUrl: {
		type: 'String',
	},
	attachmentPositionX: {
		type: 'String',
		default: 'center'
	},
	attachmentPositionY: {
		type: 'String',
		default: 'center'
	},
	attachmentSize: {
		type: 'String',
		default: 'cover'
	},
	backgroundColor: {
		type: 'String'
	},
	overlayEnabled: {
		type: 'Boolean',
		default: 'false'
	},
	overlayAttachmentId: {
		type: 'Number',
	},
	overlayAttachmentUrl: {
		type: 'String',
	},
	overlayColor: {
		type: 'String'
	},
	overlayOpacity: {
		type: 'Number',
		default: '60',
	},
	paddingTop: {
		type: 'Number',
		default: '60',
	},
	paddingBottom: {
		type: 'Number',
		default: '60',
	},
	marginTop: {
		type: 'Number',
		default: '0',
	},
	marginBottom: {
		type: 'Number',
		default: '0',
	},
	mobilePaddingTop: {
		type: 'Number',
		default: '28',
	},
	mobilePaddingBottom: {
		type: 'Number',
		default: '28',
	},
	mobileMarginTop: {
		type: 'Number',
		default: '0',
	},
	mobileMarginBottom: {
		type: 'Number',
		default: '0',
	},
}

const { getComputedStyle } = window;

const FallbackStyles = withFallbackStyles((node, ownProps) => {
	const { textColor, backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector('[contenteditable="true"]');
	const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
	return {
		fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
		fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
	};
});


registerBlockType('bt-custom-blocks/global-page-section', {
	title: 'Marcus Hiles: Section',
	description: 'Add a section that separates content, and put any other block into it.',
	category: 'layout',
	icon: 'welcome-widgets-menus',
	keywords: [
		_x('section', 'keyword'),
		_x('separator', 'keyword'),
	],
	supports: {
		align: ['wide', 'full'],
		anchor: true,
	},
	attributes: blockAttributes,
	edit: compose([withColors('backgroundColor')], FallbackStyles)(EditBlock),
	save: props => {
		const { attributes } = props;
		const {
			attachmentId,
			attachmentPositionX,
			attachmentPositionY,
			attachmentSize,
			backgroundColor,
			overlayEnabled,
			overlayColor,
			overlayAttachmentId,
			overlayAttachmentUrl,
			overlayOpacity,
			paddingTop,
			paddingBottom,
			marginTop,
			marginBottom,
			mobilePaddingTop,
			mobilePaddingBottom,
			mobileMarginTop,
			mobileMarginBottom } = attributes;

		return (
			<Section
				paddingBottom={paddingBottom}
				paddingTop={paddingTop}
				marginBottom={marginBottom}
				marginTop={marginTop}
				mobilePaddingTop={mobilePaddingTop}
				mobilePaddingBottom={mobilePaddingBottom}
				mobileMarginTop={mobileMarginTop}
				mobileMarginBottom={mobileMarginBottom}
				backgroundColor={backgroundColor}
				overlayColor={overlayColor}
				overlayAttachmentId={overlayAttachmentId}
				overlayAttachmentUrl={overlayAttachmentUrl}
				overlayOpacity={overlayOpacity}
				overlayEnabled={overlayEnabled}
				attachmentPositionX={attachmentPositionX}
				attachmentPositionY={attachmentPositionY}
				attachmentSize={attachmentSize}
				className={classnames(
					attachmentId && `has-background-image-${attachmentId}`
				)}
				style={backgroundColor ? { backgroundColor: `${backgroundColor}` } : undefined}>
				<InnerBlocks.Content />
			</Section>
		);
	},
});