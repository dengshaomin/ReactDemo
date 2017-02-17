package com.example.dengshaomin.helloworld;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by dengshaomin on 2017/2/14.
 */
public class JsAndroidModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "JsAndroid";
    private Context mContext = null;

    public JsAndroidModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void jsActivity(Callback successBack, Callback erroBack) {
        try {
            Activity currentActivity = getCurrentActivity();
            int result = currentActivity.getIntent().getIntExtra("data", 0);//会有对应数据放入
            successBack.invoke(result);
        } catch (Exception e) {
            erroBack.invoke(e.getMessage());
        }
    }
}
