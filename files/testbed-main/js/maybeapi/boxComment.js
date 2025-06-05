import {backendUrls} from "./backendUrls.js";
import {gimmeAccessFunctionObjectWithURLBase} from './genericCrudPatternWrapperGenerator.js'

export var boxComment = gimmeAccessFunctionObjectWithURLBase(backendUrls.boxComments)