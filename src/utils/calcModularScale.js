const defaults = require("../config/defaults");

module.exports = (value, data) => {
    if (data.settingsAreNumbers && data.settings) {
        const sFtMin = data.settings?.fontSizeMin
        const sFtMax = data.settings?.fontSizeMax
        const sFtRMin = data.settings?.ratioMin
        const sFtRMax = data.settings?.ratioMax
        const sFtSMin = data.settings?.screenMin
        const sFtSMax = data.settings?.screenMax
        const unit = data.unit
        const sFtUnit = typeof unit === 'string' ? unit : 'rem';
        const ftMin = Math.round(sFtMin * Math.pow(sFtRMin, value) * 1e2) / 1e2;
        const ftMax = Math.round(sFtMax * Math.pow(sFtRMax, value) * 1e2) / 1e2;
        const ftDiff = Math.round((ftMax - ftMin) / 1e2) * 1e2;
        return `clamp(${ftMin}${sFtUnit}, calc(${ftMin}${sFtUnit} + ${ftDiff} * (100vw - ${sFtSMin}${sFtUnit}) / ${sFtSMax - sFtSMin}), ${ftMax}${sFtUnit})`;
    }
    return value;
}