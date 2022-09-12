"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pageSlice_1 = require("./pageSlice");
const ai_1 = require("react-icons/ai");
const PagePackage_1 = __importDefault(require("./PagePackage"));
const PageStyled_1 = require("./PageStyled");
const Page = () => {
    const Page = (0, PagePackage_1.default)();
    return (<PageStyled_1.S.PAGE>
      <PageStyled_1.S.HEADER>
        <PageStyled_1.S.TITLE_CONTAINER>
          {!Page.editTitle && (<PageStyled_1.S.TITLE onClick={() => Page.dispatch((0, pageSlice_1.toggleEditTitle)())} children={Page.pageTitle}/>)}
          {Page.editTitle && (<PageStyled_1.S.EDIT_TITLE onBlur={() => Page.dispatch((0, pageSlice_1.toggleEditTitle)())} onChange={Page.handleTitle} defaultValue={Page.pageTitle}/>)}
        </PageStyled_1.S.TITLE_CONTAINER>
        <PageStyled_1.S.PAGE_CONTROLS>
          <PageStyled_1.S.PREV_PAGE onClick={() => console.log('prev page')} children={<ai_1.AiOutlineLeft size='100%'/>}/>
          <PageStyled_1.S.PAGE_INDEX>
            {Page.pageIndex + 1} / {Page.jrnlPages.length}
          </PageStyled_1.S.PAGE_INDEX>
          <PageStyled_1.S.NEXT_PAGE onClick={() => console.log('next page')} children={<ai_1.AiOutlineRight size='100%'/>}/>
        </PageStyled_1.S.PAGE_CONTROLS>
      </PageStyled_1.S.HEADER>
      <PageStyled_1.S.BODY>
        <PageStyled_1.S.CONTENT onClick={() => Page.dispatch((0, pageSlice_1.toggleEditTitle)())} type='text' onChange={Page.handleContent} value={Page.pageContent} name={`${Page.pageIndex}-${Page.pageTitle}`}/>
      </PageStyled_1.S.BODY>
    </PageStyled_1.S.PAGE>);
};
exports.default = Page;
