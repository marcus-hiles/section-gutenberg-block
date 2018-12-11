import Section from "../components/section/SectionDiv";
import classnames from "classnames";
const { Fragment } = wp.element;
const {
	InspectorControls,
	PanelColor,
	MediaUpload,
	InnerBlocks,
	PanelColorSettings
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	BaseControl,
	IconButton,
	RangeControl,
	ToggleControl,
	Button
} = wp.components;

const { __, _x } = wp.i18n;

const EditBlock = props => {
	const { attributes, setAttributes } = props;

	const {
		attachmentId,
    attachmentUrl,
    attachmentPositionX,
    attachmentPositionY,
    attachmentSize,
		overlayEnabled,
		overlayAttachmentId,
		overlayAttachmentUrl,
		overlayColor,
		overlayOpacity,
		paddingTop,
		paddingBottom,
		marginTop,
    marginBottom,
    mobilePaddingTop,
    mobilePaddingBottom,
    mobileMarginTop,
    mobileMarginBottom,
		backgroundColor
	} = attributes;

	const onSelectBackgroundImage = media => {
		if (!media || !media.id || !media.url) {
			setAttributes({ attachmentId: undefined, attachmentUrl: undefined });
			return;
		}
		setAttributes({ attachmentId: media.id, attachmentUrl: media.url });
	};

	const onSelectOverlayImage = media => {
		if (!media || !media.id || !media.url) {
			setAttributes({ attachmentId: undefined, attachmentUrl: undefined });
			return;
		}
		setAttributes({
			overlayAttachmentId: media.id,
			overlayAttachmentUrl: media.url
		});
	};

	const onRemoveBgImage = () => {
		setAttributes({ attachmentId: undefined, attachmentUrl: undefined });
		return;
	};
	const onRemoveOverlayImage = () => {
		setAttributes({
			overlayAttachmentId: undefined,
			overlayAttachmentUrl: undefined
		});
		return;
  };

	return (
		<Fragment>
			<InspectorControls>


        <PanelBody title={"Background Image"}>
					<BaseControl label={"Background Image"}>
						<MediaUpload
							onSelect={onSelectBackgroundImage}
							type="image"
							value={attachmentId}
							render={({ open }) => (
								<IconButton icon="admin-media" onClick={open}>
									{attachmentId ? "Edit Image" : "Add Image"}
								</IconButton>
							)}
						/>
						{attachmentId && (
							<Button onClick={onRemoveBgImage} isLink isDestructive>
								{__("Remove background image")}
							</Button>
						)}
					</BaseControl>

					{attachmentId && ( <SelectControl
						label={"Background Position X"}
						value={attachmentPositionX || "center"}
						onChange={value =>
							setAttributes({
								attachmentPositionX: value
							})
						}
						options={[
							{ value: "left", label: "Left" },
							{ value: "center", label: "Center" },
							{ value: "right", label: "Right" }
						]}
          /> ) }
					{attachmentId && ( <SelectControl
						label={"Background Position Y"}
						value={attachmentPositionY || "center"}
						onChange={value =>
							setAttributes({
								attachmentPositionY: value
							})
						}
						options={[
							{ value: "top", label: "Top" },
							{ value: "center", label: "Center" },
							{ value: "bottom", label: "Bottom" }
						]}
          /> ) }

					{attachmentId && ( <SelectControl
						label={"Background Size"}
						value={attachmentSize || "cover"}
						onChange={value =>
							setAttributes({
								attachmentSize: value
							})
						}
						options={[
							{ value: "cover", label: "Cover" },
							{ value: "contain", label: "Contain" },
              { value: "full", label: "100%" },
              { value: "initial", label: "Initial" }
						]}
          /> ) }
        </PanelBody>

					<PanelColorSettings
						title={__("Background Color")}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: v => {
                  console.log(  'PanelColorSettings', props )
									setAttributes({
										backgroundColor: v
									});
								},
								label: __("Background Color")
							}
						]}
					/>


				<PanelBody title={"Section Overlay"}>
					<ToggleControl
						label={__("Enable Overlay")}
						checked={!!overlayEnabled}
						onChange={v => {
							setAttributes({
								overlayEnabled: v
							});
						}}
					/>
					{overlayEnabled && (
						<RangeControl
							label={__("Overlay Opacity")}
							value={overlayOpacity}
							onChange={v => {
								setAttributes({
									overlayOpacity: v
								});
							}}
							min={0}
							max={100}
							step={1}
						/>
					)}
					{overlayEnabled && (
						<BaseControl label={"Overlay Image"}>
							<MediaUpload
								onSelect={onSelectOverlayImage}
								type="image"
								value={overlayAttachmentId}
								render={({ open }) => (
									<IconButton icon="admin-media" onClick={open}>
										{overlayAttachmentId ? "Edit Image" : "Add Image"}
									</IconButton>
								)}
							/>
							{overlayAttachmentId && (
								<Button onClick={onRemoveOverlayImage} isLink isDestructive>
									{__("Remove Overlay image")}
								</Button>
							)}
						</BaseControl>
					)}
					{overlayEnabled && (
						<PanelColorSettings
							title={__("Overlay Color")}
							initialOpen={false}
							colorSettings={[
								{
									value: overlayColor,
									onChange: v =>
										setAttributes({
											overlayColor: v
										}),
									label: __("Overlay Color")
								}
							]}
						/>
					)}
				</PanelBody>

				<PanelBody title={"Section Spacing (Desktop)"}>
					<RangeControl
						label={__("Padding top")}
						value={paddingTop}
						onChange={v => {
							setAttributes({
								paddingTop: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
					<RangeControl
						label={__("Padding bottom")}
						value={paddingBottom}
						onChange={v => {
							console.log(paddingBottom);
							setAttributes({
								paddingBottom: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
					<RangeControl
						label={__("Margin top")}
						value={marginTop}
						onChange={v => {
							setAttributes({
								marginTop: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
					<RangeControl
						label={__("Margin bottom")}
						value={marginBottom}
						onChange={v => {
							console.log(marginBottom);
							setAttributes({
								marginBottom: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
				</PanelBody>

				<PanelBody title={"Section Spacing (Mobile)"}>
					<RangeControl
						label={__("Padding top")}
						value={mobilePaddingTop}
						onChange={v => {
							setAttributes({
								mobilePaddingTop: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
					<RangeControl
						label={__("Padding bottom")}
						value={mobilePaddingBottom}
						onChange={v => {
							console.log(mobilePaddingBottom);
							setAttributes({
								mobilePaddingBottom: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
					<RangeControl
						label={__("Margin top")}
						value={mobileMarginTop}
						onChange={v => {
							setAttributes({
								mobileMarginTop: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
					<RangeControl
						label={__("Margin bottom")}
						value={mobileMarginBottom}
						onChange={v => {
							console.log(mobileMarginBottom);
							setAttributes({
								mobileMarginBottom: v
							});
						}}
						min={0}
						max={120}
						step={4}
					/>
				</PanelBody>
			</InspectorControls>
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
				overlayEnabled={overlayEnabled}
				overlayColor={overlayColor}
				overlayAttachmentId={overlayAttachmentId}
				overlayAttachmentUrl={overlayAttachmentUrl}
        overlayOpacity={overlayOpacity}
        attachmentPositionX={attachmentPositionX}
        attachmentPositionY={attachmentPositionY}
        attachmentSize={attachmentSize}
				className={classnames(
					attachmentId && `has-background-image-${attachmentId}`
				)}
				style={
					attachmentUrl
						? {
								backgroundColor: backgroundColor && backgroundColor !== 'undefined' ? `${backgroundColor}` : '',
								backgroundImage: `url('${attachmentUrl}')`
						  }
						: { backgroundColor: backgroundColor && backgroundColor !== 'undefined' ? `${backgroundColor}` : '' }
				}
			>
				<InnerBlocks />
			</Section>
		</Fragment>
	);
};

export default EditBlock;
