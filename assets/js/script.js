jq = jQuery.noConflict();

var calculate = function () {
    var vPixelWidth = parseInt(jq.trim(jq("#video-pixel-width").val()), 10),
        vPixelHeight = parseInt(jq.trim(jq("#video-pixel-height").val()), 10),
        vColourDepth = parseInt(jq.trim(jq("#video-colour-depth").val()), 10),
        vFrameRate = parseInt(jq.trim(jq("#video-frame-rate").val()), 10),
        vPrefix = parseInt(jq.trim(jq("#video-bit-rate-prefix").val()), 10),
        vBitbyte = parseInt(jq.trim(jq("#video-bit-rate-bitbyte").val()), 10),
        vTimeMult = parseInt(jq.trim(jq("#video-bit-rate-time-multiplier").val()), 10),
        vBps = vPixelWidth * vPixelHeight * vColourDepth * vFrameRate,
        vResult = vBps / vPrefix / vBitbyte * vTimeMult,

        aBitDepth = parseInt(jq.trim(jq("#audio-bit-depth").val()), 10),
        aFreq = parseInt(jq.trim(jq("#audio-sample-frequency").val()), 10),
        aFreqMult = parseInt(jq.trim(jq("#audio-sample-frequency-multiplier").val()), 10),
        aPrefix = parseInt(jq.trim(jq("#audio-bit-rate-prefix").val()), 10),
        aBitbyte = parseInt(jq.trim(jq("#audio-bit-rate-bitbyte").val()), 10),
        aTimeMult = parseInt(jq.trim(jq("#audio-bit-rate-time-multiplier").val()), 10),
        aChannels = parseInt(jq.trim(jq("#audio-channels").val()), 10),
        aBps = aBitDepth * aFreq * aFreqMult,
        aResult = aBps / aPrefix / aBitbyte * aTimeMult,
        
        fLength = parseInt(jq.trim(jq("#video-file-length-time").val()), 10),
        fLengthMult = parseInt(jq.trim(jq("#video-file-length-time-multiplier").val()), 10),
        fSizePrefix = parseInt(jq.trim(jq("#video-file-size-prefix").val()), 10),
        fSizeBitbyte = parseInt(jq.trim(jq("#video-file-size-bitbyte").val()), 10),
        fileSize = (vBps + (aBps * aChannels)) * fLength * fLengthMult / fSizePrefix / fSizeBitbyte;

    jq("#video-bit-rate").val(vResult);
    jq("#audio-bit-rate").val(aResult);
    jq("#video-file-size").val(Util.decRound(fileSize, 2));
};

jq(document).on("change", "input, select", calculate);

jq(document).ready(function () {
    calculate();
});