package cc.ryanc.halo.model.freemarker.tag;

import cc.ryanc.halo.service.TagService;
import freemarker.core.Environment;
import freemarker.template.*;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;

/**
 * @author : RYAN0UP
 * @date : 2019/3/22
 */
@Component
public class TagTagDirective implements TemplateDirectiveModel {

    private static final String METHOD_KEY = "method";

    private final TagService tagService;

    public TagTagDirective(TagService tagService) {
        this.tagService = tagService;
    }

    @Override
    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body) throws TemplateException, IOException {
        final DefaultObjectWrapperBuilder builder = new DefaultObjectWrapperBuilder(Configuration.VERSION_2_3_25);

        if (params.containsKey(METHOD_KEY)) {
            String method = params.get(METHOD_KEY).toString();
            switch (method) {
                case "list":
                    env.setVariable("tags", builder.build().wrap(tagService.listAll()));
                    break;
                case "count":
                    env.setVariable("count", builder.build().wrap(tagService.count()));
                default:
                    break;
            }
        }
        body.render(env.getOut());
    }
}