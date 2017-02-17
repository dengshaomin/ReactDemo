package com.example.dengshaomin.helloworld;

import android.app.Application;
import android.os.Environment;

import com.facebook.react.BuildConfig;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.liulishuo.filedownloader.BaseDownloadTask;
import com.liulishuo.filedownloader.FileDownloadListener;
import com.liulishuo.filedownloader.FileDownloader;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;


/**
 * Created by dengshaomin on 2016/12/20.
 */
public class MyApplication extends Application implements ReactApplication {

    private String bundle = Environment.getExternalStorageDirectory().toString() + File.separator + "patches/";
    private String bundleName = "index.android.bundle";
    private String zipName = "pack.zip";

    @Override
    public void onCreate() {
        super.onCreate();
//        File file = new File(bundle);
//        if (!file.exists()) {
//            file.mkdirs();
//        }
//        if (!new File(bundle + bundleName).exists()) {
//            FileDownloader.init(getApplicationContext());
//            FileDownloader.getImpl().create("http://ol58b2pn9.bkt.clouddn.com/pack.zip")
//                    .setPath(bundle + zipName)
//                    .setListener(new FileDownloadListener() {
//                        @Override
//                        protected void pending(BaseDownloadTask task, int soFarBytes, int totalBytes) {
//                        }
//
//                        @Override
//                        protected void connected(BaseDownloadTask task, String etag, boolean isContinue, int soFarBytes, int totalBytes) {
//                        }
//
//                        @Override
//                        protected void progress(BaseDownloadTask task, int soFarBytes, int totalBytes) {
//                        }
//
//                        @Override
//                        protected void blockComplete(BaseDownloadTask task) {
//                        }
//
//                        @Override
//                        protected void retry(final BaseDownloadTask task, final Throwable ex, final int retryingTimes, final int soFarBytes) {
//                        }
//
//                        @Override
//                        protected void completed(BaseDownloadTask task) {
//                            try {
//                                ZIP.UnZipFolder(bundle + zipName, bundle);
//                            } catch (Exception e) {
//                                e.printStackTrace();
//                            }
//                        }
//
//                        @Override
//                        protected void paused(BaseDownloadTask task, int soFarBytes, int totalBytes) {
//                        }
//
//                        @Override
//                        protected void error(BaseDownloadTask task, Throwable e) {
//                        }
//
//                        @Override
//                        protected void warn(BaseDownloadTask task) {
//                        }
//                    }).start();
//        }

    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new JsReactPackage()
            );
        }

        @Nullable
        @Override
        protected String getJSBundleFile() {
//            if (new File(bundle + bundleName).exists()) {
//                return bundle + bundleName;
//            }
            return super.getJSBundleFile();
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

}
